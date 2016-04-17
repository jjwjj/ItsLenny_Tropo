"Its Lenny" is a set of sound files which are triggered in sequence in conjunction with voice recognition technologies with the purpose of frustrating telemarketers. 

The one public implementation I found has usage limitations and rather strict rules which if violated regardless of intent will quickly get a phone number blacklisted. I know this empirically.

The original implementation is an Asterisk Application. My past experience with Asterisk was with a phone system at a past company I worked with. Unless times have changed, it requires phone lines, hardware, and specific knowledge of the Asterisk platform. Needless to say I was looking for a simpler solution.

I've used Twilio.com in the past to build SMS applications, phone conference bridges, and simple DTMF based IVR. It was my first go-to, and fell short of the needs for a project like "Its Lenny", which has the functional requirement of recognizing when a caller on the phone pauses speaking. 

With a little bit of research I found Tropo.com which offers the same services as Twilio.com and adds the ability to recognize speech, or more importantly in this use-case the ability to recognize when someone stops speaking.


This implementation requires Tropo.com  I have successfully used the developer version (free) to get a version of "Its Lenny" up and running.  There are some differences between the Asterisk version, and this version. This version runs through a single loop of the sound files and includes an extra sound clip at the end of stuttering and nonsense before disconnecting, the Asterisk version loops ad-nauseam. This version does not contain any type of recording capabilities (mostly because that is a paid feature), the Asterisk version records the audio of the calls. Translation if you want to post it on youtube, you'll have to record it yourself.

