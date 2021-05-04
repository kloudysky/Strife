class Server < ApplicationRecord
  validates :owner_id, :server_name, presence: true

  belongs_to :owner, foreign_key: :owner_id, class_name: :User

  has_many :servermembers, foreign_key: :server_id, class_name: :ServerMember

  has_many :members, through: :servermembers, source: :member

  has_many :channels,
           foreign_key: :server_id,
           class_name: :Channel,
           dependent: :destroy

  def reset_invite_code!
    generate_unique_invite_code
    save!
    invite_code
  end

  def generate_unique_invite_code
    self.invite_code = new_invite_code
    while Server.find_by(invite_code: invite_code)
      self.invite_code = new_invite_code
    end
    invite_code
    save!
  end

  def new_invite_code
    SecureRandom.hex(3)
  end
end
