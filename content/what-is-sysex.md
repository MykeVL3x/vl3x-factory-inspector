# What is SysEx?

SysEx (System Exclusive) is a type of MIDI message that lets you control parameters that regular MIDI can't reach. While standard MIDI gives you Program Change (to switch presets) and Control Change (for things like volume), SysEx opens the door to everything else.

On the VL3X, that means all 472 parameters: reverb types, delay times, harmony styles, amp models, EQ settings, button assignments, and more. If you can adjust it on the pedal, you can control it via SysEx.

## The SysEx Generator

The SysEx Generator takes the guesswork out of building these messages. Select a parameter, choose a value, and it outputs the exact hex string you need. Copy it into onSong, your MC-8, or any MIDI-capable controller.

## Why use SysEx with the VL3X?

- **Remote control:** Change any parameter from your iPad, foot controller, or DAW without touching the pedal
- **Per-song automation:** Build setlists where each song loads the exact settings you need
- **Smooth transitions:** Avoid the audio glitch that comes with the built-in Steps feature
- **Hands-free operation:** Keep playing while your sound changes happen automatically

## Ready to build SysEx messages?

Click **SysEx Generator** in the left panel to start creating commands for your VL3X.
