import { useRouter } from "next/router";


export const ActiveLink=({href,children})=>{
    const router = useRouter();
    (function prefetchPages(){
        if(typeof window!=='undefined'){
            router.prefetch(router.pathname)
        }
    })
    const handleClick=(e)=>{
        e.preventDefault();
        router.push(href);
    }
    const currentPath=router?.pathname===href|| router?.asPath===href;
    return(
    <div >
        <a href={href} onClick={handleClick}
        style={{
            textDecoration:'none',
            margin:0,
            padding:0,
            fontWeight:currentPath? 'bold':'normal',
            color:currentPath? 'blue':'green',
           
        }}>
        {children}
        </a>
    </div>
    )
}