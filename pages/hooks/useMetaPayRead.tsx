import { useContractRead } from 'wagmi'
import { METAPAY_CONTRACT } from '../../config'


const useMetaPayRead = (functionName='') => {
    
    const { data, isError, isLoading } = useContractRead({
        ...METAPAY_CONTRACT,
        functionName,
      })

      return  { data, isError, isLoading }
}

export default useMetaPayRead

