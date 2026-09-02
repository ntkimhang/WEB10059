//Thêm kỹ năng động

const btAddSkill = document.getElementById("btAddSkill");

const skillContainer = document.getElementById("skill-list");

btAddSkill.addEventListener("click", () => {
  const newSkill = prompt("Nhập kỹ năng mới: ");

  if (newSkill && newSkill.trim() !== "") {
    //Kiểm tra kỹ năng đã tồn tại chưa
    const exists = Array.from(skillContainer.children).some(
      (span) =>
        span.textContent.toLowerCase() === newSkill.trim().toLowerCase(),
    );

    if (exists) {
      alert("Kỹ năng này đã tồn tại!");
      return;
    }

    const skillSpan = document.createElement("span");
    skillSpan.classList.add("skill");
    skillSpan.textContent = newSkill.trim();

    skillContainer.appendChild(skillSpan);
  }
});

//Thêm kinh nghiệm

const btAddExperience = document.getElementById("btAddExperience");
const experienceList = document.getElementById("experience-list");

btAddExperience.addEventListener("click", () => {
  const ex = document.getElementById("txtExperience").value;
  const es = document.getElementById("txtDescription").value;

  if (ex.trim() !== "" && es.trim() !== "") {
    const dtObj = document.createElement("dt");
    const ddObj = document.createElement("dd");

    dtObj.textContent = ex.trim();
    ddObj.textContent = es.trim();

    experienceList.appendChild(dtObj);
    experienceList.appendChild(ddObj);

    document.getElementById("txtExperience").value = "";
    document.getElementById("txtDescription").value = "";
  } else {
    alert("Vui lòng nhập đầy đủ kinh nghiệm và mô tả!");
  }
});
