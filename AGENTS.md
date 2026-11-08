# Project conventions
- Serve uploaded page media through imported Lovable Assets pointers; convert incompatible formats before upload to keep browsers compatible and the repository lightweight.
- Keep one video player and sound control mounted above route pages; remux requested music into that video so internal navigation never resets music.
- The homepage opening logo is a user-gesture gate: unmute and play the video directly on click, then reveal page content after its exit animation, to meet browser autoplay requirements.
- Store opening state in the route-level media provider and use history back with a homepage fallback; returning within the app must not repeat the entry gate.