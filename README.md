# RISC-V-Simulator
This is a functional simulator of a subset of RISC-V instruction set, and has been developed as a part of 'CS204 - Computer Architecture' course in three phases. 

## Phase-1 (Single Cycle Execution)
In this type of execution each instruction goes through the following five stages one after another :-
- **Instruction Fetch (IF):** In this stage, the processor fetches the instruction from memory. The program counter (PC) holds the address of the next instruction to be executed. The instruction is fetched from memory using the PC, and it is prepared for the next stage.
- **Instruction Decode (DE):** In this stage, the fetched instruction is decoded. The processor identifies the type of instruction, determines the operands, and determines the operation to be performed. The instruction decode stage also includes register file read operations, where the necessary registers are read based on the instruction's operands.
- **Execute (EX):** In this stage, the actual execution of the instruction takes place. The ALU (Arithmetic Logic Unit) performs the necessary arithmetic or logical operation on the operands received from the previous stage. For example, if the instruction is an arithmetic operation like addition or subtraction, the ALU performs the corresponding operation.
- **Write Back (WB):** In this final stage, the results of the executed instruction are written back to the register file. The result may be stored in a register based on the instruction's destination operand. This stage updates the register file with the computed result.
- **Memory Access (MEM):** In this stage, memory-related operations are performed. It includes load and store instructions. For load instructions, the memory is accessed to fetch the data from a specified memory location. For store instructions, the data from the register is stored into a specified memory location.

## Phase-2 (Pipelined Implementation)
This version of the RISC-V simulator supports piplined execution of instructions. The pipeline allows multiple instructions to be processed simultaneously, with each instruction at a different stage in the pipeline. This pipelining technique helps improve the overall performance and efficiency of the processor. There are various input knobs that can be set by the user to enable/disable pipelining, data forwarding, printing register file and printing pipeline registers for all or a specific instruction. At the end of the execution, the simulator prints various insightful pipeline statistics in a *stats.txt* file.

## Phase-3 (Cache Implementation)
This version of the simulator supports data and instruction caches. Various input parameters like cache size, cache block size, type of cache and number of ways can be set by the user. At the end of the execution, the simulator prints various insightful cache statistics in a *cacheStats.txt* file.