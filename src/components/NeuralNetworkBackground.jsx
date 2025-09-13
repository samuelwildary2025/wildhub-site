import React, { useRef, useEffect } from 'react';

const NeuralNetworkBackground = ({ className = "neural-network-bg", opacity = 0.08 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Função para redimensionar o canvas
    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width || window.innerWidth;
      canvas.height = rect.height || window.innerHeight;
    };

    resizeCanvas();

    let particlesArray = [];
    const numberOfParticles = Math.floor(canvas.width / 5);

    class Particle {
      constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
      }
      
      update() {
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
          this.speedY = -this.speedY;
        }
        this.x += this.speedX;
        this.y += this.speedY;
      }
      
      draw() {
        ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particlesArray = [];
      
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() - 0.5) * 0.6;
        const speedY = (Math.random() - 0.5) * 0.6;
        
        particlesArray.push(new Particle(x, y, size, speedX, speedY));
      }
    };

    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const distance = Math.sqrt(
            Math.pow(particlesArray[a].x - particlesArray[b].x, 2) + 
            Math.pow(particlesArray[a].y - particlesArray[b].y, 2)
          );
          
          if (distance < 100) {
            const opacityValue = 1 - (distance / 100);
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacityValue * 0.6})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connect();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      resizeCanvas();
      init();
      animate();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} style={{ opacity }} />;
};

export default NeuralNetworkBackground;