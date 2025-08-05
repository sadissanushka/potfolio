
        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        
        function showDialog() {
            document.getElementById('aboutDialog').style.display = 'block';
        }
        
        function hideDialog() {
            document.getElementById('aboutDialog').style.display = 'none';
        }
        
        function downloadResume() {
            alert('Resume.txt would be downloaded in a real implementation.');
        }
        
        function openEmail() {
            window.location.href = 'mailto:ssinindu@gmail.com?subject=Portfolio Inquiry';
        }
        
        function copyContact() {
            const contactText = 'ssinindu@gmail.com';
            navigator.clipboard.writeText(contactText).then(() => {
                alert('Email address copied to clipboard!');
            }).catch(() => {
                alert('Email: ssinindu@gmail.com');
            });
        }
        
        function printPage() {
            window.print();
        }
        
        // Add some interactive window behavior
        let isDragging = false;
        let currentWindow = null;
        let offset = { x: 0, y: 0 };
        
        document.querySelectorAll('.window-header').forEach(header => {
            header.addEventListener('mousedown', (e) => {
                isDragging = true;
                currentWindow = header.closest('.window');
                const rect = currentWindow.getBoundingClientRect();
                offset.x = e.clientX - rect.left;
                offset.y = e.clientY - rect.top;
                currentWindow.style.position = 'relative';
                currentWindow.style.zIndex = '999';
            });
        });
        
        document.addEventListener('mousemove', (e) => {
            if (isDragging && currentWindow) {
                const x = e.clientX - offset.x;
                const y = e.clientY - offset.y;
                currentWindow.style.left = Math.max(0, Math.min(x, window.innerWidth - currentWindow.offsetWidth)) + 'px';
                currentWindow.style.top = Math.max(0, Math.min(y, window.innerHeight - currentWindow.offsetHeight)) + 'px';
            }
        });
        
        document.addEventListener('mouseup', () => {
            isDragging = false;
            currentWindow = null;
        });
        
        // Simulate system boot message
        window.addEventListener('load', () => {
            setTimeout(() => {
                console.log('System 1.0 loaded successfully. Welcome to Macintosh.');
            }, 1000);
        });