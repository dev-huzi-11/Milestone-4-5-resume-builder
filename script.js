var _a;
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
(_a = document.querySelector(".resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePicture = document.getElementById("profile-picture");
    var userNameInput = document.getElementById("user-name");
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var educationInput = document.getElementById("education");
    var skillsInput = document.getElementById("skills");
    var experienceInput = document.getElementById("experience");
    var shareableLinkButton = document.getElementById("shareable-link");
    var shareableLinkContainer = document.querySelector(".shareable-link-container");
    var downloadPdfButton = document.getElementById("download-pdf");
    var resumeOutputElement = document.querySelector(".output");
    var editButton = document.getElementById("edit-button");
    var saveButton = document.getElementById("save-button");
    if (profilePicture &&
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
        resumeOutputElement) {
        var userName = userNameInput.value;
        var userFullName = nameInput.value;
        var userEmail = emailInput.value;
        var userPhone = phoneInput.value;
        var userEducation = educationInput.value;
        var userSkills = skillsInput.value;
        var userExperience = experienceInput.value;
        var profilePictureFile = (_a = profilePicture.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        var resumeOutput = "\n      <h2>Resume</h2>\n      ".concat(profilePictureURL
            ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"picture\">")
            : "", "\n      <p><strong>Name:</strong> <span contenteditable=\"false\" id=\"editable-name\">").concat(userFullName, "</span></p>\n      <p><strong>Email:</strong> <span contenteditable=\"false\" id=\"editable-email\">").concat(userEmail, "</span></p>\n      <p><strong>Phone:</strong> <span contenteditable=\"false\" id=\"editable-phone\">").concat(userPhone, "</span></p>\n      <h3>Education</h3>\n      <p><span contenteditable=\"false\" id=\"editable-education\">").concat(userEducation, "</span></p>\n      <h3>Skills</h3>\n      <p><span contenteditable=\"false\" id=\"editable-skills\">").concat(userSkills, "</span></p>\n      <h3>Experience</h3>\n      <p><span contenteditable=\"false\" id=\"editable-experience\">").concat(userExperience, "</span></p>\n    ");
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.style.display = "block";
        shareableLinkContainer.style.display = "block";
        var shareableURL_1 = "".concat(window.location.origin, "?resume_userName=").concat(encodeURIComponent(userName.trim().toLowerCase()));
        shareableLinkButton.textContent = "Copy Shareable Link";
        shareableLinkButton.addEventListener("click", function () {
            navigator.clipboard.writeText(shareableURL_1).then(function () {
                alert("Shareable link copied to clipboard!");
            });
        });
        downloadPdfButton.addEventListener("click", function () {
            var element = resumeOutputElement;
            var opt = {
                margin: 1,
                filename: "resume.pdf",
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
            };
            html2pdf().from(element).set(opt).save();
        });
        // Edit and Save Functionality
        editButton.addEventListener("click", function () {
            makeFieldsEditable(true);
            editButton.style.display = "none";
            saveButton.style.display = "inline";
        });
        saveButton.addEventListener("click", function () {
            saveChanges();
            makeFieldsEditable(false);
            editButton.style.display = "inline";
            saveButton.style.display = "none";
        });
        function makeFieldsEditable(isEditable) {
            var fields = document.querySelectorAll("[contenteditable]");
            fields.forEach(function (field) {
                field.setAttribute("contenteditable", isEditable.toString());
            });
        }
        function saveChanges() {
            var _a, _b, _c, _d, _e, _f;
            var resumeOutputElement = document.querySelector(".output");
            if (!resumeOutputElement) {
                console.error("Resume output element not found");
                return;
            }
            var newName = (_a = document.getElementById("editable-name")) === null || _a === void 0 ? void 0 : _a.textContent;
            var newEmail = (_b = document.getElementById("editable-email")) === null || _b === void 0 ? void 0 : _b.textContent;
            var newPhone = (_c = document.getElementById("editable-phone")) === null || _c === void 0 ? void 0 : _c.textContent;
            var newEducation = (_d = document.getElementById("editable-education")) === null || _d === void 0 ? void 0 : _d.textContent;
            var newSkills = (_e = document.getElementById("editable-skills")) === null || _e === void 0 ? void 0 : _e.textContent;
            var newExperience = (_f = document.getElementById("editable-experience")) === null || _f === void 0 ? void 0 : _f.textContent;
            if (newName &&
                newEmail &&
                newPhone &&
                newEducation &&
                newSkills &&
                newExperience) {
                // Safely update resumeOutputElement if it exists
                resumeOutputElement.innerHTML = "\n          <h2>Resume</h2>\n          <p><strong>Name:</strong> ".concat(newName, "</p>\n          <p><strong>Email:</strong> ").concat(newEmail, "</p>\n          <p><strong>Phone:</strong> ").concat(newPhone, "</p>\n          <h3>Education</h3>\n          <p>").concat(newEducation, "</p>\n          <h3>Skills</h3>\n          <p>").concat(newSkills, "</p>\n          <h3>Experience</h3>\n          <p>").concat(newExperience, "</p>\n        ");
            }
            else {
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
    }
    else {
        console.error("One or more elements are missing.");
    }
});
