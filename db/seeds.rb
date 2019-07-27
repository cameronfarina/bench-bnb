# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bench.create!(
  description: 'first description',
  lat: 37.763604, 
  lng: -122.434352
)
Bench.create!(
  description: 'up north',
  lat: 37.792843, 
  lng: -122.430822
)
Bench.create!(
  description: 'third description',
  lat: 37.754686, 
  lng: -122.492818
)
Bench.create!(
  description: 'lakeshore',
  lat: 37.717369, 
  lng: -122.499484
)