# Pattern Navigator
pattern-navigator package for [Atom](https://atom.io/) text editor

It helps you navigate your code by a pattern based list of lines and also maintaining folding points within Atom. It takes the lines matching the patterns and lists them with their indentation to give you an overview of your code.

It serves a similar purpose to the minimap package but with a different approach.

## Things it can do:

### 1. List all matching lines keeping their indentation.
![List all matching lines with indentation.](https://raw.githubusercontent.com/hg42/pattern-navigator/master/resources/all_matching_lines.png)

### 2. Search the panel.
![Search the panel](https://raw.githubusercontent.com/hg42/pattern-navigator/master/resources/fold_search.png)

### 3. You can limit the depth it will parse and list.
You could use this if you only wanted to see let's say a list of methods in a class. In which case you might not care what is at indentation level 5.
This is a screen shot where max indentation is set to 1. This (and all settings btw) can be grammar specific.

![Limited search the panel](https://raw.githubusercontent.com/hg42/pattern-navigator/master/resources/limited_folds_search.png)

### 4. Move within folds.
A list of commands available to you to navigate within the folds.

1. previousFold (ctrl-alt-cmd-up)
2. nextFold (ctrl-alt-cmd-down)
3. moveLevelUp (ctrl-alt-cmd-left)
4. moveLevelDown (ctrl-alt-cmd-right)
5. nextFoldAtCurrentLevel
6. previousFoldAtCurrentLevel

### 5. Keep your code folded at all time.
If you are into that kind of thing. Since I can see my fold points in the navigator panel for me actually now easier not to fold my code at all. But it's there within fold navigator settings if you prefer it that way.

### 6. Toggle folds at level 1, 2, 3, 4 , 5 ctrl+1. ctrl+2 etc ... ,
You can toggle the folding at specific level. It might be helpful when you are reading someone else's code and you want to get a quick overview of what is going on at the different indentation levels.

### 7. Toggle sub folds.
Typically Atom will only unfold the very fold you have clicked on and not the the folds under it. This command will toggle all sub folds within a fold. Currently it is assigned to ctrl-alt-cmd-/ and yes it would be nicer if I could override the double click Atom opens fold with but I don't yet know how to do that. So maybe in the future.

### 8. Per language/grammar settings.
All the options can be defined per language (grammar) bases but for now it only supports one language per editor. So it will not support mixed content like html + javascript.

Language specific settings are in your config.cson which you have to edit manually.
You will find most of what you need here
[http://flight-manual.atom.io/using-atom/sections/basic-customization/](http://flight-manual.atom.io/using-atom/sections/basic-customization/)

### Notes:

1. It only works if your code is indented and well formatted. I use [https://atom.io/packages/atom-beautify](https://atom.io/packages/atom-beautify) to achieve this.
2. You must open the fold navigator panel at least once after you have started Atom to be able to use this package. This is because fold navigator does not start/activate when Atom starts. Use ctrl-alt-cmd-[ to open the fold navigator panel.
3. Skype on a Mac uses one of the shortcuts (ctrl-alt-cmd-up) globally. So if you find your shortcuts don't work it's most likely because of Skype. If you find a way around this please let me know.
4. Windows (and Linux) user I am sorry ... you will have to assign shortcuts to the commands yourself. The ones I have chosen seem to be unusable on Windows. I have not tried on Linux but it possibly is the same.

Try it and see. Feel free to suggest and let me know if you have any issues/bugs.

Happy coding! : )
