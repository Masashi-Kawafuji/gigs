class Gig < ApplicationRecord
  belongs_to :user
  
  validates :held_on, presence: true
  validates :published, presence: true
  validates :drink_quantity, presence: true, if: -> { drink_included }
  validate :charge_cannot_be_less_than_0,
   :drink_quantity_cannot_be_less_than_1,
   :held_on_cannot_be_in_the_past,
   :start_at_cannot_be_earlier_than_open_at

  private

  def held_on_cannot_be_in_the_past
    if held_on < Time.zone.today
      errors.add(:held_on, '過去の日付は選択できません。')
    end
  end

  def start_at_cannot_be_earlier_than_open_at
    if start_at < open_at
      errors.add(:start_at, '開場時刻よりも遅く設定してください。')
    end
  end
  
  def charge_cannot_be_less_than_0
    if charge < 0
      errors.add(:charge, '0円以上に設定してください。')
    end
  end

  def drink_quantity_cannot_be_less_than_1
    if drink_quantity < 1
      errors.add(:drink_quantity, '1杯以上を選択してください。')
    end
  end
end
