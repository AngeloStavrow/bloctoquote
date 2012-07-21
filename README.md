# Bloctoquote

## Information

Author: Angelo Stavrow<br>
E-mail: contact@angelostavrow.com<br>
Creation Date: 25 June, 2012<br>
Last Modified: 21 July, 2012<br>
Version: 1.0<br>
Licence: MIT/X11 ([Link](http://www.opensource.org/licenses/mit-license.php "OSI: The MIT License"))


## Description

This Firefox add-on creates a context-menu entry that copies selected text and formats it per [Octopress](http://octopress.org/ "Octopress")'s blockquote syntax:

    {% blockquote [author] [link] [source_link_title] %}
    Quote string
    {% endblockquote %}

It then places this data on the system clipboard for easy copying into your favourite markdown editor.


## Usage

The user selects the text to be quoted and right-clicks to bring up Firefox's context menu. Upon choosing *Create Blockquote*, the selected text, page link, and page title are auto-filled in Octopress blockquote syntax.

The user can then paste the pre-formatted blockquote into their preferred text editor.

**Note:** The author data is not parsed; the user should replace the `Source` placeholder as appropriate. If the author name is made blank, then no source link/title is shown in the blockquote.

## Disclaimer

Please note that this add-on is third-party software and is not supported by, affiliated with, or even known to exist by the good folks that created and maintain Octopress. I wrote it to make my life easier, and wanted to share it with you.


## Changelog

### 1.0 (2012-07-21)

Revved to version 1.0; compatibility with FireFox v14.0 tested.

### 0.3 (2012-06-29)

`lib/main.js`: Changed the `Author` placeholder in the attribution string to `Source` for better experience; this can now remain unchanged if the site doesn't specify the author.


### 0.2 (2012-06-25)

`lib/main.js`: Updated the newline character at the end of the generated blockquote syntax from `\n` to `\r\n` for better compatibility in Windows.


### 0.1 (2012-06-25)

Initial release.
