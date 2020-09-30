/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react'
import styles from './partnerstext.module.css'
import { FaFacebook } from 'react-icons/fa'

interface PartnersTextProps {
    partner: string;
}

const PartnersText: React.FC<PartnersTextProps> = ({ partner }) => {
    return (
        <fieldset className={styles.market}>

            <div className={styles.information}>

                <div className={
                    partner === 'milbr' ? styles.milbr
                        : partner === 'thyda' ? styles.thyda
                            : partner === 'frutibom' ? styles.frutibom
                                : partner === 'funeraria' ? styles.funeraria
                                    : partner === 'petshop' ? styles.petshop
                                        : partner === 'pamonharia' ? styles.pamonharia
                                            : partner === 'raissa' ? styles.raissa
                                                : partner === 'loterica' ? styles.loterica
                                                    : styles.default
                }>
                </div>
                <div className={styles.textPartner}>
                    <p>
                        {partner === 'milbr' ? <>
                            Quer aproveitar todas as emoções que a internet pode oferecer, com a qualidade que a sua família merece? <br />
                            <strong>Internet + TeIefonia Fixa Digital + TV por Assinatura </strong><br />
                        Na Milbr.Net o cliente é especial e sempre está em primeiro lugar. <br />
                        São 29 funcionários qualificados e treinados para desempenhar o melhor atendimento. <br />
                        A assistência técnica é personalizada, com atendimento 24h, 07 dias por semana, sempre um profissional <br />
                        disponível para melhor atender as necessidades de seus clientes. <br />
                            <strong>Confira os planos:</strong><br />
                            <ul>
                                <li><strong>80 Mb: </strong>R$89,90</li>
                                <li><strong>150 Mb: </strong>R$109,90</li>
                                <li><strong>300 Mb: </strong>R$124,90</li>
                            </ul>
                        E ainda pode contar com a <strong>Milbr.ti</strong>, uma loja completa de peças e serviços para informática. <br />
                        </> : ''}

                        {partner === 'thyda' ? <>
                            <strong>Endereço: </strong> Avenida  Rebeca, 318 <br />
                            <strong>Thyda Motos</strong> tem: <br />
                            <ul>
                                <li>Peças</li>
                                <li>Servicos</li>
                                <li>Mexedores de Café</li>
                                <li>Motocaçamba</li>
                            </ul>
                        E agora com<strong> Auto Socorro Gaspar</strong>. <br />
                        A Thyda Motos conta com mecânicos  qualificados e responsaveis. <br />
                        Também com injeção  eletrônica e  Guincho  24 horas! <br />

                            <strong>Telefone: </strong>(35) 9 9151-6661 | 9 9148-9304 <br />
                            <strong>Guincho  24 horas: </strong> (35) 9 9264-4638
                            </> : ''}

                        {partner === 'frutibom' ? <>
                            <strong>Endereço: </strong> Avenida Dr. Américo Luz, 82 e Rua João Pessoa, 117 | Também em Juruaia <br />
                            Na sorveteria Fruti Bom você encontra: <br />
                            <ul>
                                <li>Pagão</li>
                                <li>Taças</li>
                                <li>Tortas de Vários Sabores</li>
                                <li>Picoles</li>
                                <li>Milk Shake</li>
                                <li>Paleta Mexicana</li>
                                <li>Sorvete Expresso</li>
                            </ul>
                            Tudo isso na melhor sorveteria da cidade!
                            </> : ''}

                        {partner === 'funeraria' ? <>
                            <strong>Telefone: </strong> (35) 3571-1736<br />
                            A senhora Sônia Maria Sapata trabalhou durante anos com funerárias de <br />
                            tradição no Estado de São Paulo e adquiriu uma experiência incomparável no ramo. <br />

                            Hoje, com filiais firmadas em Muzambinho, Guaxupé, <br />
                            Cabo Verde, Botelhos, Alterosa e Nova Resende, a Funerária São Dimas completa 30 anos de <br />
                            pioneirismo no fornecimento de assistência funeral, na <strong>estrutura completa e moderna e no <br />
                            atendimento focado no carinho, atenção e dignidade de seus clientes.</strong>
                        </> : ''}

                        {partner === 'petshop' ? <>
                            A Pet Shop Bela Vista é o SPA para seu animalzinho! <br />
                            O lugar perfeito para dar de melhor ao seu animal. <br />
                            Você encontra na Pet Shop Bela Vista:
                            <ul>
                                <li>Banho e Tosa em Cães e Gatos;</li>
                                <li>Medicamentos Veterinários;</li>
                                <li>Produtos Veterinários;</li>
                                <li>Linha Pet Completa;</li>
                                <li>Serviço de Pet Sitter;</li>
                                <li>Hotel;</li>
                                <li>Ração.</li>
                            </ul>
                            <strong>Tudo que seu animalzinho precisa tem na Pet Shop Bela Vista!</strong> <br />
                            <strong>Endereços:</strong> <br />
                            Rua Aparecida, 135 B, Centro - Muzambinho/MG <br />
                            Rua Francisco B. da Costa, 115-A, Jardim Quinta da B. Vista - Muzambinho/MG <br />
                            <strong>Contatos:</strong> <br />
                            <strong>Telefone:</strong> (35) 3571-1280 <br />
                            <strong>WhatsApp:</strong> (35) 9 9743-8588 <br />
                        </> : ''}

                        {partner === 'pamonharia' ? <>
                            <strong>Precisando de produtos ortopédicos e hospitalares?!</strong> <br />
                            Na MinasMed você encontra: <br />
                            <ul>
                                <li>Joelheiras</li>
                                <li>Tornozeleiras</li>
                                <li>Munhequeiras</li>
                                <li>Protetor de Escaras para Calcanhar</li>
                                <li>Colchão Caixa de Ovo</li>
                                <li>Travesseiro Suave Encosto, para repouso das pernas também, ajudando na circulação</li>
                            </ul>
                            <strong>Isso e muito mais com entrega grátis!</strong> <br />
                            <strong>Endereço: </strong> Rua Aristides Coimbra, 116 - Descendo para o hospital <br />
                            <strong>Telefone: </strong>(35) 3571-5744 <br />
                            <strong>WhatsApp: </strong>(35) 9 9817 5503
                        </> : ''}

                        {partner === 'raissa' ? <>
                            Raissa Laser e Estética atende em Muzambinho, Guaxupé, São João da Boa Vista, Jacutinga, Albertina, Campestre. <br />
                            Futuramente em Poços de Caldas, Nova Resende e Juruaia <br />
                            Em Muzambinho tem tratamentos como:
                            <ul>
                                <li>Programa Afine-se para emagrecimento | Gordura Localizada</li>
                                <li>Flacidez | Celulite</li>
                                <li>Drenagem Linfática | Massagem Modeladora</li>
                                <li>Hidratação Facial | Redução de Papada</li>
                                <li>Peeling Amazônico | Limpeza de Pele</li>
                                <li>Pump (Bumbum na Nuca) | Hidromassagem</li>
                                <li>Dêtox Corporal | Jato de Plasma</li>
                            </ul>
                            E muito mais! <br />
                            Venha para Raissa Laser e Estética! Invista em você! <br />
                            <strong>Endereço: </strong> Rua Sete de Setembro, 935, Centro<br />
                            <strong>Telefone: </strong>(35) 3571-4471 | (35) 9 9914 9278<br />

                        </> : ''}

                        {partner === 'loterica' ? <>
                            Quer mudar de vida? <br />
                        Venha para Lotérica Sua Casa! A Lotérica da Sorte! A Lotérica dos Bolões Campeões! <br />
                        A Lotérica Sua Casa já pagou prêmios de mais de 4 milhões da Mega Sena! <br />
                        Com o melhor atendimento no Alto da Aparecida:
                        <ul>
                                <li>Bolões da Sorte</li>
                                <li>Mega Sena</li>
                                <li>Time Maria</li>
                                <li>Dupla Sena</li>
                                <li>Quina</li>
                                <li>Dia da Sorte</li>
                                <li>Loto Fácil</li>
                            </ul>
                        E outros! <br />
                        Compre os Bolões Premiados na sua Lotérica da Sorte no Alto da Aparecida! <br />
                            <strong>Endereço: </strong> Rua João Pinheiro, 828, Centro<br />
                            <strong>Telefone: </strong>(35) 3571-1936<br />

                        </> : ''}
                    </p>
                </div>
                <a href={
                    partner === 'thyda' ? 'https://www.facebook.com/thydamotos'
                        : partner === 'milbr' ? 'https://www.facebook.com/milbrnet'
                            : partner === 'frutibom' ? 'https://www.facebook.com/FrutiBomSorveteria'
                                : partner === 'funeraria' ? 'https://www.facebook.com/funerariasaodimas'
                                    : partner === 'petshop' ? 'https://www.facebook.com/petbelavista'
                                        : partner === 'pamonharia' ? 'https://www.facebook.com/Anasabores.com.br'
                                            : partner === 'raissa' ? 'https://www.facebook.com/raissalaserestetica'
                                                : partner === 'loterica' ? 'https://www.facebook.com/lotericasuacasa'
                                                    : 'www.jornaljotamaria.com.br'
                }
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={styles.linkPartner}>
                        Página no Facebook
                            <FaFacebook color="white" size={20} className={styles.fbIcon} />

                    </div>
                </a>

            </div>

        </fieldset>
    )
}

export default PartnersText
