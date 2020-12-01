class UserSerializer
  include JSONAPI::Serializer

  attributes :id,
    :name, 
    :role,
    :avatar
end
