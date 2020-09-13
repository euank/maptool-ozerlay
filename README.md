## mt-vue

This is my experiments with using vuejs to handle all the macros and management
of my character in a maptool campaign.

This is not meant to be reproducible since it relies on details specific to my
character and our campaign. It may include some houserules and such.

I'm leaving this as a public repo on github in case anyone else wants to try
and do something similar.

### Setup

To use this, I make a few assumptions.

1. Your character doesn't use the 'handout' section of 'config' (that's where javascript and html is stored).
1. You do not use your character's "notes" field.

#### Manual

Produce the 'dist.png' output from this repo by running 'make', and set your
'handout' image to that in maptool.

Add the two needed scripts:

1. `lib_eval` as a macro on your character named 'lib\_eval' with the contents of the 'lib\_eval.mt' file in this repo.
2. A "Launch Overlay" macro (named whatever you like) with the contents of 'overlay.mt'.

To update it in the future, you only need to edit your 'handout' image to a new version of the code.

#### Automatic

TODO: provide tooling to patch this into an existing maptool token.
