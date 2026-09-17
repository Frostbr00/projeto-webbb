from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def pagina_inicial():
    # Dados que serão passados para o template
    # Podem ser qualquer tipo Python: strings, números, listas, dicionários...
    dados = {
        'titulo': 'Sistema de Gestão',
        'subtitulo': 'Desenvolvido com Python e Flask',
        'versao': '1.0.0',
        'autor': 'FATEC Jahu — Turma GTI 2026',
        'total_usuarios': 128,
        'sistema_ativo': True
    }
    # Os dados são passados como argumentos nomeados para render_template
    # O nome do argumento vira o nome da variável no template
    return render_template('index.html', **dados)
    # O ** "desempacota" o dicionário: é equivalente a escrever
    # render_template('index.html', titulo=dados['titulo'], subtitulo=dados['subtitulo'], ...)


if __name__ == '__main__':
    app.run(debug=True)