class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :role, null: false
      t.string :instrument
      t.string :location
      t.text :biography
      t.string :avatar
      t.boolean :activated, null: false, default: false
      t.string :activated_token_digest
      t.datetime :activated_token_sent_at
      t.string :reset_password_token_digest
      t.datetime :reset_password_token_sent_at

      t.timestamps
    end

    add_index :users, :email, unique: true
  end
end
