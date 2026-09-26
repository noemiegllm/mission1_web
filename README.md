# Mission 1 - The Number Oracle

This is a small game that runs entirely in a web browser. The player must guess a secret number by typing their guesses. For each attempt, the Oracle provides a clue.

---

## AI Usage

* **Tools used:** Gemini
* **Parts developed with AI:**
  * Debugging syntax errors (conditional checks, assignment checks).
  * styling the entire page with simple CSS.
* **Parts written by hand:**
  * Initial HTML and JavaScript code was written by hand to implement my logic.
* **Prompts Example:**
  1. *"I need to create a 'Guess the Number' game where the player guesses a mystery number by proposing values ​​between 1 and 100. I've already created the HTML. I'd like you to correct only the syntax errors while preserving the logic of my initial JS code."*

  2. *"I need to meet the following requirements: [...] Tell me which ones are not being met."*

For the AI JS & HTML result, I only used them to modify my code by hand (not copy the code). Regarding the CSS, I copied the code, then reviewed and removed unnecessary code parts.

---

## Autopsy

I originally structured the code around comparing the player's guess to the secret number right away (playerGuess < secret, playerGuess > secret, etc.). I put all the others values in the "else".

Problems Encountered:
    - Code Redundancy: I found myself duplicating the attempt counter logic (Counter++) across multiple conditional branches.
    - Missing type verification: Even if invalid inputs (empty, string)  didn't generate an error, they weren't verify.

**Decision made:** Filtering out all invalid inputs (`playerGuess < 1`, `playerGuess > 100`, or string/`NaN`) at the beginning before running the game logic. Thanks to this, the code is a bit more organized and reliable.

---
