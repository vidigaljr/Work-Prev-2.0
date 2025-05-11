    // Initialize AOS animation
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
    
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Highlight active navigation link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
      
      // Show/hide back to top button
      const backToTopButton = document.getElementById('back-to-top');
      if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('hidden');
      } else {
        backToTopButton.classList.add('hidden');
      }
    });
    
    // Back to top functionality
    document.getElementById('back-to-top').addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Service modal functionality
    const serviceDetails = {
      1: {
        title: "Treinamentos em Segurança do Trabalho",
        content: `
          <div class="space-y-4">
            <p>Oferecemos treinamentos especializados em segurança do trabalho, capacitando seus colaboradores para atuarem com segurança e conformidade com as Normas Regulamentadoras.</p>
            
            <h4 class="font-semibold text-lg text-gray-800">Principais Treinamentos:</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>NR 10 - Segurança em Instalações e Serviços em Eletricidade</li>
              <li>NR 33 - Segurança e Saúde nos Trabalhos em Espaços Confinados</li>
              <li>NR 35 - Trabalho em Altura</li>
              <li>NR 12 - Segurança no Trabalho em Máquinas e Equipamentos</li>
              <li>NR 18 - Condições e Meio Ambiente de Trabalho na Indústria da Construção</li>
              <li>NR 11 - Transporte, Movimentação, Armazenagem e Manuseio de Materiais</li>
            </ul>
            
            <h4 class="font-semibold text-lg text-gray-800">Benefícios:</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>Instrutores altamente qualificados</li>
              <li>Material didático atualizado</li>
              <li>Certificação válida em todo território nacional</li>
              <li>Treinamentos teóricos e práticos</li>
              <li>Atendimento in company ou em nossa sede</li>
            </ul>
          </div>
        `
      },
      2: {
        title: "Legislação Contra Incêndio - NR 23",
        content: `
          <div class="space-y-4">
            <p>Assessoria completa em prevenção e combate a incêndios, atendendo todas as exigências da NR 23 e corpo de bombeiros, garantindo a segurança de sua empresa e colaboradores.</p>
            
            <h4 class="font-semibold text-lg text-gray-800">Serviços Incluídos:</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>Elaboração do Plano de Prevenção e Proteção Contra Incêndio (PPCI)</li>
              <li>Treinamento de Brigada de Incêndio</li>
              <li>Análise de risco e projeto de prevenção</li>
              <li>Regularização junto ao Corpo de Bombeiros</li>
              <li>Inspeção e manutenção de equipamentos de combate a incêndio</li>
              <li>Simulados de abandono de área</li>
            </ul>
            
            <h4 class="font-semibold text-lg text-gray-800">Vantagens:</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>Evita multas e interdições</li>
              <li>Garante a segurança de seus colaboradores</li>
              <li>Protege seu patrimônio</li>
              <li>Atendimento personalizado</li>
              <li>Equipe especializada em prevenção de incêndios</li>
            </ul>
          </div>
        `
      },
      3: {
        title: "Gestão de Eventos E-Social",
        content: `
          <div class="space-y-4">
            <p>Gestão completa dos eventos de SST no eSocial, garantindo conformidade legal e evitando multas e penalidades para sua empresa.</p>
            
            <h4 class="font-semibold text-lg text-gray-800">Nossos Serviços:</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>Cadastro completo de SST no eSocial</li>
              <li>Gestão de eventos periódicos (S-1060, S-1065, S-2210, etc.)</li>
              <li>Elaboração e envio de documentos obrigatórios</li>
              <li>Atualização de dados cadastrais</li>
              <li>Monitoramento de prazos e obrigações</li>
              <li>Consultoria para adequação às normas</li>
            </ul>
            
            <h4 class="font-semibold text-lg text-gray-800">Por que escolher nosso serviço?</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>Evite erros que podem gerar multas pesadas</li>
              <li>Tenha tranquilidade com a conformidade legal</li>
              <li>Equipe especializada em legislação trabalhista</li>
              <li>Sistema integrado com acompanhamento em tempo real</li>
              <li>Relatórios personalizados para gestão estratégica</li>
            </ul>
          </div>
        `
      }
    };
    
    const serviceModal = document.getElementById('service-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');
    
    document.querySelectorAll('.service-details-btn').forEach(button => {
      button.addEventListener('click', () => {
        const serviceId = button.getAttribute('data-service');
        const service = serviceDetails[serviceId];
        
        modalTitle.textContent = service.title;
        modalContent.innerHTML = service.content;
        serviceModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      });
    });
    
    closeModal.addEventListener('click', () => {
      serviceModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    serviceModal.addEventListener('click', (e) => {
      if (e.target === serviceModal) {
        serviceModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For this example, we'll just show a success message
        alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
        
        // Reset form
        contactForm.reset();
      });
    }
