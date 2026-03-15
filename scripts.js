
        document.addEventListener('DOMContentLoaded', () => {
            
          
            const botaoMenu = document.getElementById('botao-menu-celular');
            const menuCelular = document.getElementById('menu-do-celular');
            
            if (botaoMenu && menuCelular) {
                botaoMenu.addEventListener('click', () => {
                    menuCelular.classList.toggle('hidden');
                });
            }

           
            const linksDoMenu = document.querySelectorAll('.link-do-menu-celular');
            linksDoMenu.forEach(link => {
                link.addEventListener('click', () => {
                    if (menuCelular) {
                        menuCelular.classList.add('hidden');
                    }
                });
            });

           
            const botaoCopiar = document.getElementById('botao-copiar-endereco');
            if (botaoCopiar) {
                botaoCopiar.addEventListener('click', () => {
                    const enderecoDaLoja = 'R. Quebec, 93 - Parque Montreal, Franco da Rocha - SP, 07835-030';
                    navigator.clipboard.writeText(enderecoDaLoja).then(() => {
                        alert('Prontinho! Endereço copiado.');
                    }).catch(erro => {
                        console.error('Ops, deu um errinho ao tentar copiar o endereço: ', erro);
                    });
                });
            }
        });
 