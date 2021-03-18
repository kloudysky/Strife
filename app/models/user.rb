class User < ApplicationRecord
  validates :email, :username, :password_digest, :birthday, :session_token, presence: true
  validates :username, uniqueness: true
  validates :email, uniqueness: true
  validates :phone, uniqueness: true, allow_nil: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :owned_servers, 
  foreign_key: :owner_id,
  class_name: :Server,
  dependent: :destroy

  has_many :server_memberships,
  foreign_key: :member_id,
  class_name: :ServerMember

  has_many :membered_servers,
  through: :server_memberships,
  source: :server

  has_many :channels,
  through: :owned_servers,
  source: :channels

  has_many :messages,
  foreign_key: :author_id,
  class_name: :Message

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    session_token
  end

  private

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    self.session_token = new_session_token while User.find_by(session_token: session_token)
    session_token
  end

  def ensure_session_token
    generate_unique_session_token unless session_token
  end
end
