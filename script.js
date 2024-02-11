document.addEventListener('DOMContentLoaded', function() {
    // Show default content about exercise importance when the page loads
    showContent('exercise');
  });
  
  function showContent(contentType) {
    // Clear previous content
    document.getElementById('contentContainer').innerHTML = '';
  
    // Replace with new content based on the selected type
    let content = '';
    switch (contentType) {
        case 'exercise':
            content = `
                <div class="exerciseContent">
                    <h2>Why Exercise is Important During Pregnancy</h2>
                    <img src="https://th.bing.com/th?q=Pregnant+Exercise+Icon&dc=3&w=100&h=100&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="Exercise Importance">
                    <p>Staying active during pregnancy can have many benefits, including easing aches and pains and helping to prevent too much weight gain. Along with aerobic exercise, such as walking and swimming, exercises to strengthen muscles are important to include in a well-rounded exercise program.</p><br>
                    <p>The following exercises that focus on core muscles can help improve muscle tone, strength and endurance. Those are all parts of fitness that can help you better cope with labor and delivery. Doing these exercises also sets you up to be more physically fit after your baby is born.</p><br>                   
                    <p>For most pregnant people, starting slow and gradually adding more repetitions of an exercise each day works well. To avoid losing your balance and falling, do the exercises slowly and skip any moves that make you feel unstable.</p><br>
                   
                    <p>For some people with high-risk pregnancies or pregnancy complications, these exercises may not be advised. Before you start, talk to a member of your health care team to make sure these exercises are safe for you.</p><br>
                </div>
            `;
            break; 
              case 'mon':
        content = `
          <div class="daySchedule">
            <h2>Monday -The Walking Workout</h2>
                       <iframe width="560" height="315" src="https://www.youtube.com/embed/H5-LhJ1I-hQ" frameborder="0" allowfullscreen></iframe>
          </div>
        `;
        break;
      case 'tue':
        content = `
        <div class="daySchedule">
        <h2>Tuesday- Lower Body Exercise </h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/oZSyOo4TtTY" frameborder="0" allowfullscreen></iframe>
        </div>
        `;
        break;
        case 'wed':
        content = `
          <div class="daySchedule">
            <h2>Wednesday- Yoga</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/OT7te9Oncpk" frameborder="0" allowfullscreen></iframe>


          </div>
        `;
        break;
        case 'thu':
            content = `
              <div class="daySchedule">
                <h2>Thursday- Upper Body Exercise</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/FQYKwG_tuBo" frameborder="0" allowfullscreen></iframe>

              </div>
            `;
            break; 
            case 'fri':
        content = `
          <div class="daySchedule">
            <h2>Friday- Dance Workout</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7RB9QfY1SkM" frameborder="0" allowfullscreen></iframe>

          </div>
        `;
        break;
        case 'sat':
        content = `
          <div class="daySchedule">
            <h2>Saturday- Full Body Workout</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/InQu8jMT130" frameborder="0" allowfullscreen></iframe>

          </div>
        `;
        break;
        case 'sun':
        content = `
          <div class="daySchedule">
            <h2>Sunday- Meditation</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/d7TC9w2xr_g" frameborder="0" allowfullscreen></iframe>

          </div>
        `;
        break;
      // Repeat for other days and content types
      default:
        content = '<p>No content available.</p>';
    }
  
    document.getElementById('contentContainer').innerHTML = content;
  }
  