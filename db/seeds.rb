# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Board.destroy_all

# board1 = Board.create({title: "First board"})
# board2 = Board.create({title: "Second board"})

board1 = Board.create({title: "First board"})

list1 = List.new({title: "List 1"})
list1.board = board1
list1.save

list2 = List.new({title: "List 2"})
list2.board = board1
list2.save

card1 = Card.new({title: "Card 1"})
card1.list = list1
card1.description = "Card 1 description"
card1.save
card2 = Card.new({title: "Card 2"})
card2.list = list1
card2.save


card3 = Card.new({title: "Card 3"})
card3.list = list2
card3.save
card4 = Card.new({title: "Card 4"})
card4.list = list2
card4.save
card5 = Card.new({title: "Card 5"})
card5.list = list2
card5.save
