/** @jsxRuntime classic */
/** @jsx jsx */ import { jsx } from "theme-ui";
import React from "react";
import { BaseAccordion } from "./base-accordion";
import {
  AccordionButton,
  AccordionItemPackage,
  AccordionContents,
  single,
  preventClose,
  combineReducers,
} from "./shared";

export default function Accordion({ items, white, ...props }) {
  return (
    <BaseAccordion
      stateReducer={combineReducers(single, preventClose)}
      package
      {...props}
    >
      {({ openIndexes, handleItemClick }) => (
        <>
          {items.map((item, index) => (
            <AccordionItemPackage
              key={item.title}
              isOpen={openIndexes.includes(index)}
            >
              <AccordionButton small onClick={() => handleItemClick(index)}>
                <span
                  className={openIndexes.includes(index) ? "open" : "closed"}
                ></span>
                {item.title}
              </AccordionButton>
              <AccordionContents
                small
                white
                isOpen={openIndexes.includes(index)}
              >
                {item.contents}
              </AccordionContents>
            </AccordionItemPackage>
          ))}
        </>
      )}
    </BaseAccordion>
  );
}
