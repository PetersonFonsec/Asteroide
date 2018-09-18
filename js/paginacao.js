function paginacao(nomePag){
    let paginas   = [];

    let pontuacao = `
    <div class="tela" onload="getHistoricoNomes();getHistoricoPontos()">
                <div class="tabela">
                    <h1>Pontuação</h1>
                    <hr>			
                    <div class="scroll">

                        <div style="width: 50%;text-align: left;float: left;">
                            <b> Nome </b>
                            <ul id="ListaNome"></ul>
                        </div>

                        <div style="width: 50%;text-align: left;float: left;">
                            <b> pontuação </b>
                            <ul id="ListaPontuacao"></ul>
                        </div>
                        
                    </div>

                    <div class="div-voltar">
                        <a href="index.html" class="btn-amarelo"> voltar </a>
                        <a href="#" class="btn-vermelho" onclick="localStorage.clear()"> Limpar Histórico </a>
                    </div>		

                </div>
            </div>
    `
    paginas.push(pontuacao);
}