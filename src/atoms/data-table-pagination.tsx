import {PaginationState, Table} from "@tanstack/react-table";
import {Input} from "@/atoms/input";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/atoms/pagination";
import {Popover, PopoverContent, PopoverTrigger} from "@/atoms/popover";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/atoms/select";



interface DataTablePaginationProps {
    state: PaginationState;
    totalPages: number;
    pageSize: number;
    context: Table<any>;
}

export const DataTablePagination = ({ state, context, pageSize, totalPages }: DataTablePaginationProps) => {
    const { pageIndex } = state;

    const ellipsis = (
        <PaginationItem>
            <Popover>
                <PopoverTrigger><PaginationEllipsis /></PopoverTrigger>
                <PopoverContent className="flex flex-row gap-2 items-center w-full">
                    <label htmlFor="jump-to-page">Page:</label>
                    <Input className="w-1/4" type="number" id="jump-to-page" onChange={(e) => context.setPageIndex(Number(e.target.value) - 1)} />
                </PopoverContent>
            </Popover>
        </PaginationItem>
    )

    return (
        <div className="flex flex-row items-center w-full py-2">
        <Pagination className="flex-1 justify-end">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" isDisabled={pageIndex === 0} onClick={() => context.previousPage()} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive={pageIndex === 0} onClick={() => context.setPageIndex(0)}>1</PaginationLink>
                </PaginationItem>
                {pageIndex + 1 >= 1 && pageIndex + 1 <= 3 ? (
                    <>
                        <PaginationItem>
                            <PaginationLink href="#" isActive={pageIndex + 1 === 2} onClick={() => context.setPageIndex(1)}>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive={pageIndex + 1 === 3} onClick={() => context.setPageIndex(2)}>
                                3
                            </PaginationLink>
                        </PaginationItem>
                    </>
                ) : ellipsis}
                {pageIndex + 1 > 3 && pageIndex + 1 < totalPages - 2 && (
                    <PaginationItem>
                        <PaginationLink href="#" onClick={() => context.setPageIndex(pageIndex)} isActive>{pageIndex + 1}</PaginationLink>
                    </PaginationItem>
                )}
                {pageIndex + 1 >= totalPages - 2 && pageIndex + 1 <= totalPages ? (
                    <>
                        <PaginationItem>
                            <PaginationLink href="#" onClick={() => context.setPageIndex(totalPages - 3)} isActive={pageIndex + 1 === totalPages - 2}>
                                {totalPages - 2}
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" onClick={() => context.setPageIndex(totalPages - 2)} isActive={pageIndex + 1 === totalPages - 1}>
                                {totalPages - 1}
                            </PaginationLink>
                        </PaginationItem>
                    </>
                ) : ellipsis}
                <PaginationItem>
                    <PaginationLink href="#" isActive={pageIndex + 1 === totalPages} onClick={() => context.setPageIndex(totalPages - 1)}>{totalPages}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext onClick={() => context.nextPage()} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
            <div>
                <Select onValueChange={(value) => context.setPageSize(Number(value))}>
                    <div className="flex flex-row items-baseline gap-2">
                        <span>Per page:</span>
                        <SelectTrigger className="w-[75px]">
                            <SelectValue placeholder={pageSize} />
                        </SelectTrigger>
                    </div>
                    <SelectContent>
                        <SelectItem value={"10"}>10</SelectItem>
                        <SelectItem value={"25"}>25</SelectItem>
                        <SelectItem value={"50"}>50</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}