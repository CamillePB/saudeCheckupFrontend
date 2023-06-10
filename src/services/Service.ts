import axios from 'axios';

//consumo da API do backend na núvem com axios
export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const login = async(url:any, dados:any, setDado:any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

//função cadastroUsuario da página CadastroUser
export const cadastroUsuario = async(url:any, dados:any, setDado:any) => {
    //esperar para o usuário inserir os dados
    const resposta = await api.post(url, dados)
    setDado(resposta.data)//guardando exclusivamente o token
}

export const busca = async(url: any,setDado: any, header: any) => { 
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}

export const buscaId = async(url: any,setDado: any, header: any) => { 
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}

export const post = async(url: any, dados: any, setDado: any, header: any) => { 
    const resposta = await api.post(url,dados,header)
    setDado(resposta.data)
}
export const put = async(url: any, dados: any, setDado: any, header: any) => { 
    const resposta = await api.put(url,dados,header)
    setDado(resposta.data)
}

export const deleteId = async(url: any,header: any) => { 
    await api.delete(url,header)
}
