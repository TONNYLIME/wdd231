// store the selected element
const navbutton = document.querySelector('#ham-btn')

//Toggle the show class off and on
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
});

// select the nav element
const navBar = document.querySelector('#nav-bar');

// toggle the button to add or remove class of 'SHOW'
navbutton.addEventListener ('click', () => {
    navbutton.classList.toggle('show');
    navBar.classList.toggle('show');
});

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = new Date().getFullYear();

// Output the date the document was last modified in the second footer paragraph
// Assumes the second paragraph in the footer has an ID of "lastModified"
document.getElementById("lastModified").innerHTML = 
    `Last modified: ${document.lastModified}`;

const courseDetails = document.querySelector('#course-details');
const courseContainer = document.querySelector('.course1');
const filterButtons = document.querySelectorAll('.subject a');

const courses = [
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 3,
    certificate: 'Web & Computer Programming',
    description: 'Introduction to HTML, CSS, and basic web design.',
    technology: ['HTML', 'CSS']
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 3,
    certificate: 'Web & Computer Programming',
    description: 'JavaScript basics and DOM manipulation.',
    technology: ['HTML', 'CSS', 'JavaScript']
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Development',
    credits: 3,
    certificate: 'Web & Computer Programming',
    description: 'Advanced frontend development techniques.',
    technology: ['HTML', 'CSS', 'JavaScript']
  }
];

// ---------- DISPLAY COURSES ----------
function displayCourses(courseList) {
  courseContainer.innerHTML = '';

  courseList.forEach(course => {
    const div = document.createElement('div');
    div.classList.add('course');
    div.setAttribute('tabindex', '0'); // accessibility

    div.innerHTML = `
      <h3>${course.subject} ${course.number}</h3>
      <p>${course.title}</p>
    `;

    div.addEventListener('click', () => displayCourseDetails(course));
    div.addEventListener('keydown', e => {
      if (e.key === 'Enter') displayCourseDetails(course);
    });

    courseContainer.appendChild(div);
  });
}

// ---------- MODAL ----------
function displayCourseDetails(course) {
  courseDetails.innerHTML = `
    <button id="closeModal" aria-label="Close dialog">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits:</strong> ${course.credits}</p>
    <p><strong>Certificate:</strong> ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
  `;

  courseDetails.showModal();

  const closeBtn = courseDetails.querySelector('#closeModal');
  closeBtn.addEventListener('click', () => courseDetails.close());
}

// ESC key support
courseDetails.addEventListener('click', e => {
  if (e.target === courseDetails) {
    courseDetails.close();
  }
});

// ---------- FILTERING ----------
filterButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const filter = btn.textContent;

    if (filter === 'ALL') {
      displayCourses(courses);
    } else {
      const filtered = courses.filter(c => c.subject === filter);
      displayCourses(filtered);
    }
  });
});

// Initial load
displayCourses(courses);

