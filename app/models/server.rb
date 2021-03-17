class Server < ApplicationRecord
    validates :owner_id, :server_name, presence: true
    
    belongs_to :owner,
    foreign_key: :owner_id, 
    class_name: :User

    has_many :servermembers,
    foreign_key: :server_id, 
    class_name: :ServerMember

    has_many :members, 
    through: :servermembers,
    source: :member

    private

    def check_if_member
        
    end
    
end
