# Built-in Cards Game.
Built-in Card Games, or BCG like a vaccine, is a virtual set of card to generic purpose. This software only implements a maze of cards on the ether and able multiuser cards games on the web. The users would enjoy card game partys that emulate the steps of the real game before of COVID-19 contingency.

# Design requierements.
To emulate a real game we need cover the next functions:
* create a maze: Define a set of cards like 50 Spain Cards, 40 Spain Cards, Poker Cards, etc.
* operate over a maze: Split, distribute cards, define visibility of a maze.
* ...

# Backend API resources

Resource|Field|Type|Description
--------|-----|----|-----------
suits | id | Number | Identified for a card suit
suits | name | String | Name for a card suit.
suits | imageURL | String | URL to a card suit image.
cards | id | Number | Identified for a card.
cards | name | String | Name for a card.
cards | value | String | Card value.
