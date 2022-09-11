import { ethers } from 'ethers'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { METAPAY_CONTRACT } from '../../config'


const useMetaPayWrite = (functionName= '', value=0) => {
    const { config } = usePrepareContractWrite({
        ...METAPAY_CONTRACT,
        functionName,
        overrides: {
            value: ethers.utils.parseEther(value ? value?.toString() : '0'),
          },
      })

    const { data, isError, isLoading, write, writeAsync } = useContractWrite(config)

      return  { data, isError, isLoading, write, writeAsync }
}

export default useMetaPayWrite

