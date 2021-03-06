# Built-in Cards Game.
Built-in Card Games, or BCG like a vaccine, is a virtual set of card to generic purpose. This software only implements a maze of cards on the ether and able multiuser cards games on the web. The users would enjoy card game partys that emulate the steps of the real game before of COVID-19 contingency.

# Design requierements.
To emulate a real game we need cover the next functions:
* create a maze: Define a set of cards like 50 Spain Cards, 40 Spain Cards, Poker Cards, etc.
* operate over a maze: Split, distribute cards, define visibility of a maze.
* ...

# Backend API resources

|Resource|Description
|--------|-----------
|cards   | A card is the minimal element of a deck.
|deck    | A set of cards usually solded together.
|bulk    | A set of cards that are a part of a deck.
|game    | A game is a players session. A game can contain a set of bulks where are the diferents part of a deck.
|players | A player is an user of the game. A player can create a game to enjoy alone or create a game to invite another players.

|Resource|Field|Type|Description
|--------|-----|----|:-----------
| cards | id | Number | Identified for a card.
|  | name | String | Name for a card.
|  | value | String | Card value.
|  | imageURL | String | URL to a card image.
| deck | id | Number | An identifier for a deck of cards.
| | name | String | Name for each deck of cards. Example: 50 Spain Cards, 40 Spain Cards, Poker Cards.
| | cards | Array | List of cards included in each deck.
| bulks | id | Number | An identifier for a bulk.
| | gameId | Number | An identifier of the game in which this bulk was created.
| | playerId | Number | A player identifier from the bulk's owner. In case a public bulk, this value will be null.
| | face | Boolean | True for a bulk with their cards face up or False for a bulk with their cards face down.
| | stack | Boolean | True for access to a bottom card or top card only. False when you can access to any card in the bulk.
| games | id | Number | An unique identifier for a game session.
| | name | String | A description for the game.
| | players | Array | A list of player identifiers joined to the game.
| | bulks | Array | A list of bulk identifiers into the game.
| players | id | Number | An unique player id.
| | name | String | A name or nickname for the player.
| | token | String | Hash for the session token to check user identity inside the game.
| | dueDate | Date | 24 hours after creation date.

# Frontend desing guidelines

A preliminary visualization of the board would be:

| Another players bulk 0 | Another players bulk 1 | ... | Another players bulk N |
|------------------------|------------------------| ----|------------------------|
| Public bulk 0 | Public bulk 1 | ,,, | Public bulk N |
| Current player bulk 0 | Current player bulk 1 | ... | Current player bulk N |

# Stories

- [ ] An user arrives to the website an becomes a player.
- [ ] An user arrives to the website an becomes a player, then close the session with a button and their player info is deleted.
- [ ] An user arrives to the website an becomes a player, then he create a game and after close de session with a button and their created game and player info is deleted.

