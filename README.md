# Bloctoquote

## Information

Author: Angelo Stavrow<br>
E-mail: contact@angelostavrow.com<br>
Creation Date: 25 June, 2012<br>
Last Modified: 25 June, 2012<br>
Version: 0.1<br>
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

**Note:** The author data is not parsed; the user should replace the `Author` placeholder as appropriate. If the author name is made blank, then no source link/title is shown in the blockquote.

