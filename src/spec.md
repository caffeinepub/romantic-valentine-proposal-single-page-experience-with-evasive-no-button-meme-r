# Specification

## Summary
**Goal:** Update the Valentine proposal prompt to include “zia” and refresh the celebration meme to a cute couple-cats version with the correct “MWAAHHH” spelling.

**Planned changes:**
- Update the proposal/question screen main header text to exactly: “Will you be my Valentine zia?”
- Replace the celebration meme image asset with a newly edited/generated couple-cats meme image stored in `frontend/public/assets/generated`, and update the celebration view to load this new filename from `/assets/generated/`.
- Update the celebration screen’s visible meme-text line to exactly: “MWAAHHH MWAAHHH 💋💋”.

**User-visible outcome:** On the question screen the prompt reads “Will you be my Valentine zia?”, and after clicking “Yes” the celebration screen shows a new cute couple-cats meme image and the text “MWAAHHH MWAAHHH 💋💋”.
