declare var html2pdf: any;

// document.querySelector(".resume-form")?.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const profilePicture = document.getElementById("profile-picture") as HTMLInputElement | null;
//   const userNameInput = document.getElementById("user-name") as HTMLInputElement | null;
//   const nameInput = document.getElementById("name") as HTMLInputElement | null;
//   const emailInput = document.getElementById("email") as HTMLInputElement | null;
//   const phoneInput = document.getElementById("phone") as HTMLInputElement | null;
//   const educationInput = document.getElementById("education") as HTMLTextAreaElement | null;
//   const skillsInput = document.getElementById("skills") as HTMLTextAreaElement | null;
//   const experienceInput = document.getElementById("experience") as HTMLTextAreaElement | null;
//   const shareableLinkButton = document.getElementById("shareable-link") as HTMLButtonElement | null;
//   const shareableLinkContainer = document.querySelector(".shareable-link-container") as HTMLDivElement | null;
//   const downloadPdfButton = document.getElementById("download-pdf") as HTMLButtonElement | null;
//   const resumeOutputElement = document.querySelector(".output") as HTMLDivElement | null;

//   if (
//     profilePicture &&
//     userNameInput &&
//     nameInput &&
//     emailInput &&
//     phoneInput &&
//     educationInput &&
//     skillsInput &&
//     experienceInput &&
//     shareableLinkContainer &&
//     shareableLinkButton &&
//     downloadPdfButton &&
//     resumeOutputElement
//   ) {
//     // Getting user input
//     const userName = userNameInput.value;
//     const userFullName = nameInput.value;
//     const userEmail = emailInput.value;
//     const userPhone = phoneInput.value;
//     const userEducation = educationInput.value;
//     const userSkills = skillsInput.value;
//     const userExperience = experienceInput.value;

//     const profilePictureFile = profilePicture.files?.[0];
//     const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

//     // Creating the resume HTML output
//     const resumeOutput = `
//       <h2>Resume</h2>
//       ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="picture">` : ""}
//       <p><strong>Name:</strong> <span contenteditable="true">${userFullName}</span></p>
//       <p><strong>Email:</strong> <span contenteditable="true">${userEmail}</span></p>
//       <p><strong>Phone:</strong> <span contenteditable="true">${userPhone}</span></p>
//       <h3>Education</h3>
//       <p><span contenteditable="true">${userEducation}</span></p>
//       <h3>Skills</h3>
//       <p><span contenteditable="true">${userSkills}</span></p>
//       <h3>Experience</h3>
//       <p><span contenteditable="true">${userExperience}</span></p>
//     `;

//     // Displaying the resume output
//     resumeOutputElement.innerHTML = resumeOutput;
//     resumeOutputElement.style.display = "block";
//     shareableLinkContainer.style.display = "block";

//     // Creating a shareable link
//     const shareableURL = `${window.location.origin}?resume_userName=${encodeURIComponent(userName.trim().toLowerCase())}`;
//     shareableLinkButton.textContent = "Copy Shareable Link";
//     shareableLinkButton.addEventListener("click", () => {
//       navigator.clipboard.writeText(shareableURL).then(() => {
//         alert("Shareable link copied to clipboard!");
//       });
//     });

//     // Save data to localStorage
//     const resumeData = {
//       userName,
//       userFullName,
//       userEmail,
//       userPhone,
//       userEducation,
//       userSkills,
//       userExperience,
//     };
//     localStorage.setItem(userName, JSON.stringify(resumeData));

//     // Download the resume as PDF
//     downloadPdfButton.addEventListener("click", () => {
//       const element = resumeOutputElement;
//       const opt = {
//         margin: 1,
//         filename: "resume.pdf",
//         image: { type: "jpeg", quality: 0.98 },
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
//       };
//       html2pdf().from(element).set(opt).save();
//     });
//   } else {
//     console.error("One or more elements are missing.");
//   }
// });

document.querySelector(".resume-form")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const profilePicture = document.getElementById(
    "profile-picture"
  ) as HTMLInputElement | null;
  const userNameInput = document.getElementById(
    "user-name"
  ) as HTMLInputElement | null;
  const nameInput = document.getElementById("name") as HTMLInputElement | null;
  const emailInput = document.getElementById(
    "email"
  ) as HTMLInputElement | null;
  const phoneInput = document.getElementById(
    "phone"
  ) as HTMLInputElement | null;
  const educationInput = document.getElementById(
    "education"
  ) as HTMLTextAreaElement | null;
  const skillsInput = document.getElementById(
    "skills"
  ) as HTMLTextAreaElement | null;
  const experienceInput = document.getElementById(
    "experience"
  ) as HTMLTextAreaElement;
  const shareableLinkButton = document.getElementById(
    "shareable-link"
  ) as HTMLButtonElement;
  const shareableLinkContainer = document.querySelector(
    ".shareable-link-container"
  ) as HTMLDivElement | null;
  const downloadPdfButton = document.getElementById(
    "download-pdf"
  ) as HTMLButtonElement;
  const resumeOutputElement = document.querySelector(
    ".output"
  ) as HTMLDivElement | null;
  const editButton = document.getElementById(
    "edit-button"
  ) as HTMLButtonElement;
  const saveButton = document.getElementById(
    "save-button"
  ) as HTMLButtonElement;

  if (
    profilePicture &&
    userNameInput &&
    nameInput &&
    emailInput &&
    phoneInput &&
    educationInput &&
    skillsInput &&
    experienceInput &&
    shareableLinkContainer &&
    shareableLinkButton &&
    downloadPdfButton &&
    resumeOutputElement
  ) {
    const userName = userNameInput.value;
    const userFullName = nameInput.value;
    const userEmail = emailInput.value;
    const userPhone = phoneInput.value;
    const userEducation = educationInput.value;
    const userSkills = skillsInput.value;
    const userExperience = experienceInput.value;

    const profilePictureFile = profilePicture.files?.[0];
    const profilePictureURL = profilePictureFile
      ? URL.createObjectURL(profilePictureFile)
      : "";

    const resumeOutput = `
      <h2>Resume</h2>
      ${
        profilePictureURL
          ? `<img src="${profilePictureURL}" alt="Profile Picture" class="picture">`
          : ""
      }
      <p><strong>Name:</strong> <span contenteditable="false" id="editable-name">${userFullName}</span></p>
      <p><strong>Email:</strong> <span contenteditable="false" id="editable-email">${userEmail}</span></p>
      <p><strong>Phone:</strong> <span contenteditable="false" id="editable-phone">${userPhone}</span></p>
      <h3>Education</h3>
      <p><span contenteditable="false" id="editable-education">${userEducation}</span></p>
      <h3>Skills</h3>
      <p><span contenteditable="false" id="editable-skills">${userSkills}</span></p>
      <h3>Experience</h3>
      <p><span contenteditable="false" id="editable-experience">${userExperience}</span></p>
    `;

    resumeOutputElement.innerHTML = resumeOutput;
    resumeOutputElement.style.display = "block";
    shareableLinkContainer.style.display = "block";

    const shareableURL = `${
      window.location.origin
    }?resume_userName=${encodeURIComponent(userName.trim().toLowerCase())}`;
    shareableLinkButton.textContent = "Copy Shareable Link";
    shareableLinkButton.addEventListener("click", () => {
      navigator.clipboard.writeText(shareableURL).then(() => {
        alert("Shareable link copied to clipboard!");
      });
    });

    downloadPdfButton.addEventListener("click", () => {
      const element = resumeOutputElement;
      const opt = {
        margin: 1,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };
      html2pdf().from(element).set(opt).save();
    });

    // Edit and Save Functionality
    editButton.addEventListener("click", () => {
      makeFieldsEditable(true);
      editButton.style.display = "none";
      saveButton.style.display = "inline";
    });

    saveButton.addEventListener("click", () => {
      saveChanges();
      makeFieldsEditable(false);
      editButton.style.display = "inline";
      saveButton.style.display = "none";
    });

    function makeFieldsEditable(isEditable): void {
      const fields = document.querySelectorAll("[contenteditable]");
      fields.forEach((field) => {
        field.setAttribute("contenteditable", isEditable.toString());
      });
    }

    function saveChanges(): void {
      const resumeOutputElement = document.querySelector(
        ".output"
      ) as HTMLDivElement | null;

      if (!resumeOutputElement) {
        console.error("Resume output element not found");
        return;
      }

      const newName = document.getElementById("editable-name")?.textContent;
      const newEmail = document.getElementById("editable-email")?.textContent;
      const newPhone = document.getElementById("editable-phone")?.textContent;
      const newEducation =
        document.getElementById("editable-education")?.textContent;
      const newSkills = document.getElementById("editable-skills")?.textContent;
      const newExperience = document.getElementById(
        "editable-experience"
      )?.textContent;

      if (
        newName &&
        newEmail &&
        newPhone &&
        newEducation &&
        newSkills &&
        newExperience
      ) {
        // Safely update resumeOutputElement if it exists
        resumeOutputElement.innerHTML = `
          <h2>Resume</h2>
          <p><strong>Name:</strong> ${newName}</p>
          <p><strong>Email:</strong> ${newEmail}</p>
          <p><strong>Phone:</strong> ${newPhone}</p>
          <h3>Education</h3>
          <p>${newEducation}</p>
          <h3>Skills</h3>
          <p>${newSkills}</p>
          <h3>Experience</h3>
          <p>${newExperience}</p>
        `;
      } else {
        console.error("Missing content to display in resume.");
      }
    }
     // Clearing the form inputs
    userNameInput.value = "";
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    educationInput.value = "";
    skillsInput.value = "";
    experienceInput.value = "";
    profilePicture.value = "";
  } else {
    console.error("One or more elements are missing.");
  }
});
