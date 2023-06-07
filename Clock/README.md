# Clock

This project aims to show an analog clock with the help of HTML, CSS and JS.<br>
<br><br>
<img width="1438" alt="Screenshot 2023-06-07 at 7 53 32 PM" src="https://github.com/itsgauravv/JS-Projects/assets/95155509/53c45761-44d0-4d53-9404-7276eeca60a4">




## Logic:

So, for hour hand rotation - <br>
In 12 hours, hour hand rotates 360°. So, for 1 hour -> (360/12).<br>
And also there is movement because of minute hand so similarly, 60min -> 360° so 1min -> 0.5°.<br>
So, total is (30*h + 0.5*m)
(There will be movement because of seconds hand but its negligible)
<br><br>
Now, for minute hand rotation - <br>
Movement because of minute hand, 60min -> 30° so 1min -> 6°.<br>
So, total is (6*m)
<br><br>
Now, for seconds hand rotation - <br>
Movement because of second hand, 60sec -> 30° so 1sec -> 6°.<br>
So, total is (6*s)
<br><br>
## Tech Stats:
- [x] HTML
- [x] CSS
- [x] JS
