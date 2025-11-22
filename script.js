document.addEventListener("DOMContentLoaded", function () {
  // Form fields
  const inputs = document.querySelectorAll(".input-field");

  // Preview elements
  const previewName = document.getElementById("preview-name");
  const previewRole = document.getElementById("preview-role");
  const previewBio = document.getElementById("preview-bio");
  const previewSkills = document.getElementById("preview-skills");

  const githubLink = document.getElementById("preview-github");
  const linkedinLink = document.getElementById("preview-linkedin");
  const websiteLink = document.getElementById("preview-website");
  const emailPill = document.getElementById("preview-email");

  const printBtn = document.getElementById("print-btn");
  const resetBtn = document.getElementById("reset-btn");

  // Initialise QR
  const qrContainer = document.getElementById("qrcode");
  const qr = new QRCode(qrContainer, {
    text: "",
    width: 120,
    height: 120,
  });

  function getFormData() {
    const get = (selector) =>
      (document.getElementById(selector)?.value || "").trim();

    return {
      name: get("name"),
      role: get("role"),
      bio: get("bio"),
      skills: get("skills"),
      github: get("github"),
      linkedin: get("linkedin"),
      website: get("website"),
      email: get("email"),
    };
  }

  function updatePreview() {
    const data = getFormData();

    // Name & role
    previewName.textContent = data.name || "Your Name";
    previewRole.textContent =
      data.role || "Your role or tagline appears here";

    // Bio
    if (data.bio) {
      previewBio.textContent = data.bio;
      previewBio.classList.remove("muted");
    } else {
      previewBio.textContent =
        "A short one-line bio will appear here once you start typing.";
      previewBio.classList.add("muted");
    }

    // Skills
    const skillsContainer = previewSkills;
    const labelSpan = skillsContainer.querySelector(".label");
    const previousPills = skillsContainer.querySelectorAll(".skill-pill");
    previousPills.forEach((pill) => pill.remove());

    const skills = data.skills
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    if (skills.length > 0) {
      labelSpan.classList.remove("muted");
      skills.forEach((skill) => {
        const span = document.createElement("span");
        span.className = "skill-pill";
        span.textContent = skill;
        skillsContainer.appendChild(span);
      });
    } else {
      labelSpan.classList.add("muted");
    }

    // Links helpers
    function updateLink(anchor, value) {
      if (!anchor) return;
      if (value) {
        anchor.href = value;
        anchor.classList.remove("hidden");
      } else {
        anchor.removeAttribute("href");
        anchor.classList.add("hidden");
      }
    }

    updateLink(githubLink, data.github);
    updateLink(linkedinLink, data.linkedin);
    updateLink(websiteLink, data.website);

    // Email pill
    if (data.email) {
      emailPill.textContent = data.email;
      emailPill.classList.remove("hidden");
    } else {
      emailPill.textContent = "";
      emailPill.classList.add("hidden");
    }

    // QR payload
    const payloadLines = [
      "DevFest Networking Card",
      `Name: ${data.name || "N/A"}`,
      data.role ? `Role: ${data.role}` : null,
      data.bio ? `Bio: ${data.bio}` : null,
      data.skills ? `Skills: ${data.skills}` : null,
      data.github ? `GitHub: ${data.github}` : null,
      data.linkedin ? `LinkedIn: ${data.linkedin}` : null,
      data.website ? `Website: ${data.website}` : null,
      data.email ? `Email: ${data.email}` : null,
    ].filter(Boolean);

    const qrPayload = payloadLines.join("\n");

    // Update QR code
    qr.clear();
    qr.makeCode(qrPayload);
  }

  // Bind input events
  inputs.forEach((el) => {
    el.addEventListener("input", updatePreview);
  });

  // Print button
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // Reset button
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      const form = document.getElementById("profile-form");
      if (form) {
        form.reset();
        updatePreview();
      }
    });
  }

  // Initial render
  updatePreview();
});
