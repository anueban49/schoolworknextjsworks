"use client";
import { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

const pageSwitch = () => {
    //
  const [currentPage, SetCurrentPage] = useState(1);
  const nextpage = () => {
    SetCurrentPage((prev) => prev + 1);
  };
  const prevpage = () => {
    SetCurrentPage((prev) => prev - 1);
  };
  return (
    <>
      <Pagination className="w-fit m-0">
        <PaginationContent>
          <PaginationItem>
            <Button onClick={prevpage}>
              <ChevronLeft />
              Prev
            </Button>
          </PaginationItem>
          <PaginationItem>{totalpage}</PaginationItem>
          <PaginationItem>
            <Button onClick={nextpage}>
              Next
              <ChevronRight />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};
