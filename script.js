// Custom Cursor Logic
const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.transform = 'scale(1.2)';
});

// Main Section Navigation Logic
function openSection(name) {
    const popup = document.createElement('div');
    popup.className = 'popup';

    let content = "";

    if (name === "Home") {
        content = `
        <div class="popup-box" style="max-width:900px;width:95%;text-align:center;overflow:hidden;">
            <h1 id="home-title" style="font-size:45px;font-weight:800;opacity:0;transform:translateY(20px);transition:0.8s;">
                Hi, I'm Prateek Shubham
            </h1>
            <p id="home-role" style="color:#ff4b91;font-size:20px;margin-top:10px;opacity:0;transition:1s;">
                Frontend Developer • UI/UX Designer
            </p>
            <p id="home-desc" style="color:#ccc;margin-top:20px;font-size:16px;max-width:600px;margin-left:auto;margin-right:auto;opacity:0;transition:1.2s;">
                I build modern, responsive, and visually stunning web applications that deliver real user value.
            </p>
            <div id="home-points" style="margin-top:30px;display:flex;flex-wrap:wrap;justify-content:center;gap:15px;opacity:0;transition:1.5s;">
                <span style="padding:10px 18px;background:#222;border-radius:20px;">Creative UI</span>
                <span style="padding:10px 18px;background:#222;border-radius:20px;">Fast Performance</span>
                <span style="padding:10px 18px;background:#222;border-radius:20px;">Clean Code</span>
                <span style="padding:10px 18px;background:#222;border-radius:20px;">User Focused</span>
            </div>
        </div>
        `;

        setTimeout(() => {
            document.getElementById("home-title").style.opacity = "1";
            document.getElementById("home-title").style.transform = "translateY(0)";
            document.getElementById("home-role").style.opacity = "1";
            document.getElementById("home-desc").style.opacity = "1";
            document.getElementById("home-points").style.opacity = "1";
        }, 100);
    } 
    else if (name === "About") {
        content = `
        <div class="popup-box" style="max-width:800px;width:90%;">
            <h2 style="font-size:35px;margin-bottom:20px;">About Me</h2>
            <div style="display:flex;flex-wrap:wrap;gap:30px;align-items:center;justify-content:center;">
                <div style="max-width:400px;text-align:left;">
                    <h3 style="font-size:26px;">Prateek Shubham</h3>
                    <p style="color:#ff4b91;margin-bottom:10px;">Frontend Developer • UI/UX</p>
                    <p style="color:#ccc;margin-bottom:15px;">
                        Passionate developer focused on modern and interactive web apps.
                    </p>
                    <p><strong>Email:</strong> 
                    <a href="mailto:prateekshubham67@gmail.com" style="color:#ff4b91;">
                        prateekshubham67@gmail.com
                    </a></p>
                    <p><strong>Location:</strong> Bengaluru, India</p>
                    <div style="margin-top:15px;display:flex;flex-wrap:wrap;gap:10px;">
                        <span style="padding:6px 12px;background:#222;border-radius:15px;">HTML</span>
                        <span style="padding:6px 12px;background:#222;border-radius:15px;">CSS</span>
                        <span style="padding:6px 12px;background:#222;border-radius:15px;">JavaScript</span>
                        <span style="padding:6px 12px;background:#222;border-radius:15px;">React</span>
                    </div>
                </div>
            </div>
        </div>
        `;
    } 
    else if (name === "Contact") {
        content = `
        <div class="popup-box" style="max-width:600px;width:90%;text-align:center;">
            <h2 style="font-size:35px;margin-bottom:20px;">Contact Me</h2>
            <p style="margin-bottom:20px;">
                <strong>Email:</strong><br>
                <a href="mailto:prateekshubham67@gmail.com" style="color:#ff4b91;font-size:18px;">
                    prateekshubham67@gmail.com
                </a>
            </p>
            <div style="display:flex;justify-content:center;gap:25px;margin-top:20px;">
                <a href="https://www.instagram.com/prateek_shubham5?igsh=cHJhemFveXRyeXZh" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/share/1DdTzxmtir/" target="_blank"><i class="fab fa-facebook"></i></a>
                <a href="https://www.linkedin.com/in/prateek-shubham-91b9a7325" target="_blank"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
        `;
    } 
    else if (name === "Projects") {
        content = `
        <div class="popup-box" style="max-width:900px;width:95%;">
            <h2 style="font-size:35px;margin-bottom:25px;">My Projects</h2>
            <div style="display:flex;flex-wrap:wrap;gap:25px;justify-content:center;">
                <div onclick="openProjectDetail('catering')" style="width:260px;background:#1a1a1a;padding:20px;border-radius:15px;cursor:pointer;">
                    <h3>Online Catering Ordering System</h3>
                    <p style="color:#aaa;font-size:14px;">Click to view full details</p>
                </div>
                <div onclick="openProjectDetail('posture')" style="width:260px;background:#1a1a1a;padding:20px;border-radius:15px;cursor:pointer;">
                    <h3>Posture Detection (PoseNet)</h3>
                    <p style="color:#aaa;font-size:14px;">Click to view full details</p>
                </div>
            </div>
        </div>
        `;
    } 
    else if (name === "Blog") {
        content = `<div class="popup-box"><h2>Blog</h2><p>Showcase your expertise 🚀</p></div>`;
    } 
    else {
        content = `<div class="popup-box"><h2>${name}</h2></div>`;
    }

    popup.innerHTML = content;
    document.body.appendChild(popup);
    
    // Close popup when clicking on the background
    popup.onclick = (e) => {
        // Prevent closing if clicking inside the box itself
        if (e.target === popup) { 
            popup.remove();
        }
    };
}

// Project Details Logic
function openProjectDetail(type) {
    const popup = document.createElement('div');
    popup.className = 'popup';

    popup.style.opacity = "0";
    popup.style.transform = "scale(0.8)";
    popup.style.transition = "0.4s ease";

    let content = "";

    if (type === "catering") {
        content = `
        <div class="popup-box" style="max-width:850px;width:90%;text-align:left;">
            <h2>Online Catering Ordering System</h2>
            <p style="color:#ccc;margin:15px 0;">
                A web-based platform to browse menus, customize food, and place catering orders easily.
            </p>
            <h3>🚀 How I Built This</h3>
            <ul style="color:#aaa;line-height:1.7;">
                <li>Structured full UI using HTML</li>
                <li>Styled responsive design using CSS (Flexbox)</li>
                <li>Added interactivity with JavaScript</li>
                <li>Built menu system & order flow</li>
                <li>Optimized for mobile and desktop</li>
            </ul>
            <h3>✨ Features</h3>
            <ul style="color:#aaa;">
                <li>Menu browsing</li>
                <li>Order system</li>
                <li>Responsive UI</li>
            </ul>
            <p style="color:#ff4b91;">Tech: HTML, CSS, JS</p>
        </div>`;
    } 
    else if (type === "posture") {
        content = `
        <div class="popup-box" style="max-width:850px;width:90%;text-align:left;">
            <h2>Posture Detection using PoseNet</h2>
            <p style="color:#ccc;margin:15px 0;">
                AI-based posture detection using real-time webcam and PoseNet.
            </p>
            <h3>🚀 How I Built This</h3>
            <ul style="color:#aaa;line-height:1.7;">
                <li>Integrated TensorFlow.js PoseNet</li>
                <li>Used webcam API</li>
                <li>Extracted body keypoints</li>
                <li>Analyzed posture with JS</li>
                <li>Displayed live feedback</li>
            </ul>
            <h3>✨ Features</h3>
            <ul style="color:#aaa;">
                <li>Real-time tracking</li>
                <li>AI detection</li>
                <li>Live feedback</li>
            </ul>
            <p style="color:#ff4b91;">Tech: TensorFlow.js, JS</p>
        </div>`;
    }

    popup.innerHTML = content;
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.style.opacity = "1";
        popup.style.transform = "scale(1)";
    }, 10);

    popup.onclick = (e) => {
        if (e.target === popup) {
            popup.style.opacity = "0";
            popup.style.transform = "scale(0.8)";
            setTimeout(() => popup.remove(), 300);
        }
    };
}