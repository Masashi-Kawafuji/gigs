class AddGanreRefToGigs < ActiveRecord::Migration[6.0]
  def change
    add_reference :gigs, :ganre, foreign_key: true
  end
end
