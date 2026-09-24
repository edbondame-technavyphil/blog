require_relative "boot"

require "rails"
require "active_model/railtie"
require "active_job/railtie"
require "action_controller/railtie"
require "action_view/railtie"
require "rails/test_unit/railtie"

require "mongoid"
require "mongoid/railtie"

Bundler.require(*Rails.groups)

module BlogBackend
  class Application < Rails::Application
    config.load_defaults 8.0
    config.api_only = true
  end
end