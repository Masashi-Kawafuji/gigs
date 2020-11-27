# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_21_165916) do

  create_table "ganres", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "gigs", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.date "held_on", null: false
    t.boolean "published", default: false, null: false
    t.string "place_id"
    t.string "venue"
    t.integer "charge"
    t.boolean "drink_included", default: false, null: false
    t.integer "drink_quantity"
    t.time "open_at"
    t.time "start_at"
    t.text "description"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "ganre_id"
    t.index ["ganre_id"], name: "index_gigs_on_ganre_id"
    t.index ["user_id"], name: "index_gigs_on_user_id"
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "role", default: "spectator", null: false
    t.string "instrument"
    t.string "location"
    t.text "biography"
    t.string "avatar"
    t.boolean "activated", default: false, null: false
    t.string "activate_token_digest"
    t.datetime "activate_token_sent_at"
    t.string "reset_password_token_digest"
    t.datetime "reset_password_token_sent_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "gigs", "ganres"
  add_foreign_key "gigs", "users"
end
