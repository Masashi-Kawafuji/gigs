class CreateGigs < ActiveRecord::Migration[6.0]
  def change
    create_table :gigs do |t|
      t.date :held_on, null: false
      t.boolean :published, null: false, default: false
      t.string :place_id
      t.string :venue
      t.integer :charge
      t.boolean :drink_included, null: false, default: false
      t.integer :drink_quantity
      t.time :open_at
      t.time :start_at
      t.text :description
      t.references :user, foreign_key: true, null: false

      t.timestamps
    end
  end
end
