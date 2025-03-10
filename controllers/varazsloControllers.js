import varazslok from '../data/varazslok.js'

export const getAllVarazslo=(req,res)=>{
    res.status(200).json(varazslok)
}

export const getVarazsloById=(req,res)=>{
    const id=req.params.id
    if(id<0||id>=varazslok.length){
        return res.status(404).json({message:'Varázsló nem található'})
    }
    res.status(200).json(varazslok[id])
}

export const createVarazslo=(req,res)=>{
    const {nev,palca,haz}=req.body
        if(!nev||!palca||!haz){
        return res.status(400).json({message:'Hiányzó adat'})
    }
    const ujVarazslo={nev,palca,haz}
    varazslok.push(ujVarazslo)
    res.status(201).json(ujVarazslo)
}
export const updateVarazslo=(req,res)=>{
    const id=req.params.id
    if(id<0||id>=varazslok.length){
        return res.status(404).json({message:'Varázsló nem található'})
    }
    const {nev,palca,haz}=req.body
        if(!nev||!palca||!haz){
        return res.status(400).json({message:'Hiányzó adat'})
    }
    varazslok[id]={nev,palca,haz}
    res.status(200).json(varazslok[id])
}

export const deleteVarazslo=(req,res)=>{
    const id=req.params.id
    if(id<0||id>=varazslok.length){
        return res.status(404).json({message:'Varázsló nem található'})
    }
    varazslok.splice(id,1)
    res.status(200).json({message:"Törlés sikeres"})
}