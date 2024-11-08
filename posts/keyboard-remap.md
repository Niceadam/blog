# Key-remapping Essentials

*2024-03-19*

The modern keyboard may not be well designed but that shouldn't stop you from
squeezing as much ergonomics as you can out of it. Use
[`keyd`](https://github.com/rvaiya/keyd) to remap your digital operations,
screen communications and key revelations.

*Full list of remaps are in my [`dotfiles`](https://github.com/Niceadam/dotfiles)*


## 1. AltGr + (ijkl)/(uo) => ArrowKeys/HomeEnd

I use Neovim but the bindings don't transfer easily to other software. This
works well since AltGr is close to the thumb (I use a ThinkPad keyboard).

## 2. CapsLock Press/Hold => Esc/Ctrl

Vimmers will be familiar with this one, although I overload the key so to get Ctrl for free.

## 3. Ctrl + (j/k) => Ctrl + (Shift) + Tab

*Remember: CapsLock is now Ctrl*. Tab switching is the most common browser
operation so this is well worth sacrificing.

## 4. AltGr + [a-z] => [symbols]

AltGr is there, might as well map the symbol space to the letters.
some examples:
- AltGr + e/r = [/]
- AltGr + d/f = {/}
- AltGr + w = #
..

## 5. Alt + (q/f) => Open/Focus on (q)onsole/(f)irefox

These 2 apps make up 90% of my workflow so they have they're own keys. Use
`wmctrl` to check if a window is already open to switch to.

## *Honorable Mentions*:
- AltGr + . => playpause media
- AltGr + m => type out 192.168. (why could this be useful?)
