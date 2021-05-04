class User < ApplicationRecord
  validates :email,
            :username,
            :password_digest,
            :birthday,
            :session_token,
            presence: true
  validates :username, uniqueness: true, length: { minimum: 2, maximum: 30 }
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
           class_name: :ServerMember,
           dependent: :destroy

  has_many :membered_servers, through: :server_memberships, source: :server

  has_many :owned_channels, foreign_key: :owner_id, class_name: :Channel

  has_many :channel_memberships,
           foreign_key: :recipient_id,
           class_name: :Channelmember

  has_many :membered_channels, through: :channel_memberships, source: :channel

  has_many :messages,
           foreign_key: :author_id,
           class_name: :Message,
           dependent: :destroy

  has_many :friend_requests_as_requestor,
           foreign_key: :requestor_id,
           class_name: :FriendRequest

  has_many :friend_requests_as_receiver,
           foreign_key: :receiver_id,
           class_name: :FriendRequest

  has_many :friendships_as_friend_a,
           foreign_key: :friend_a_id,
           class_name: :Friendship
  has_many :friendships_as_friend_b,
           foreign_key: :friend_b_id,
           class_name: :Friendship
  has_many :friend_as, through: :friendships_as_friend_b
  has_many :friend_bs, through: :friendships_as_friend_a

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
    while User.find_by(session_token: session_token)
      self.session_token = new_session_token
    end
    session_token
  end

  def ensure_session_token
    generate_unique_session_token unless session_token
  end
end
