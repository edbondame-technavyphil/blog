# config/initializers/mongoid.rb
require "mongoid"

# 1. Explicitly force Mongoid to load the configuration file for the current environment
Mongoid.load!(Rails.root.join("config", "mongoid.yml"), Rails.env)

# 2. Apply Mongoid version defaults
Mongoid.configure do
  target_version = "9.1"
  config.load_defaults target_version
end