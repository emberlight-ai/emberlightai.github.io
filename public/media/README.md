# Media drop folder

Drop real assets here with these exact names — the site picks them up
automatically (no code changes). Until a file exists, a styled placeholder
shows in its place.

| File               | Used on              | What it is                          |
| ------------------ | -------------------- | ----------------------------------- |
| coach-1.jpg … coach-6.jpg | Home, For Users | Coach portraits (≈ 3:4 portrait) — names/tags editable in components/CoachMarquee.tsx |
| product-app.png    | Home                 | App product screenshot              |
| product-dashboard.png | For Coaches       | Coach dashboard screenshot          |
| demo-user.mp4      | Home, For Users      | User-end demo video (9:16 vertical) |
| demo-user-poster.jpg | same               | Poster frame for the user demo      |
| demo-coach.mp4     | How it works, For Coaches | Coach-end demo video (16:9)    |
| demo-coach-poster.jpg | same              | Poster frame for the coach demo     |
| founder-alice.jpg  | Founding team        | Alice portrait (≈ 3:4)              |
| founder-carl.jpg   | Founding team        | Carl portrait (≈ 3:4)               |

## Added in v3

| File | Used on | What it is |
| ---- | ------- | ---------- |
| testimonial-1.jpg … testimonial-3.jpg | Home, For Coaches | Coach headshots for quote cards (square) |

Also: replace the SAMPLE testimonial quotes and [Coach name] attributions in
`components/Testimonials.tsx` with real coach quotes before launch — the
bracketed names are intentional so sample quotes can't ship unnoticed.
The $14K stat footnote lives in `app/page.tsx` — adjust the wording to match
how the number is actually calculated.
