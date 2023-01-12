import { Combobox } from "@headlessui/react";
import { useState, FC } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Float } from "@headlessui-float/react";

import { searchOptions } from "../../../data/mock";

const default_tokens = [
  "2001 A Space Odessey",
  "Pablo Picasso",
  "Nighttime",
  "Color Red",
];

interface TokenizedInputProps {}

const TokenizedInput: FC<TokenizedInputProps> = (props) => {
  const [tokens, setTokens] = useState(default_tokens);
  const [selectedOption, setSelectedOption] = useState(searchOptions);
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? searchOptions
      : searchOptions.filter((search) => {
          return (
            search.toLowerCase().includes(query.toLowerCase()) &&
            !tokens.includes(search)
          );
        });

  return (
    <div>
      <div className="flex gap-3.5 items-center">
        <button type="button">
          <FiSearch size={12} />
        </button>
        <Combobox
          value={selectedOption}
          onChange={(option: any) => {
            setTokens([option, ...tokens]);
            setSelectedOption(option);
            setQuery("");
          }}
        >
          <Float>
            <Combobox.Input
              onChange={(event) => setQuery(event.target.value)}
              className="bg-transparent focus:px-1 text-grey-200"
              placeholder="Search"
              value={query}
              onSubmit={() => {}}
            />
            {filteredOptions.length > 0 ? (
              <Combobox.Options className="my-2 py-2 bg-black-chip rounded-xl ring-1 ring-border">
                {filteredOptions?.map((person) => (
                  <Combobox.Option
                    key={person}
                    value={person}
                    className="px-3.5 py-2 last:pb-0 ui-active:bg-black/20 cursor-pointer"
                  >
                    {person}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            ) : (
              <div></div>
            )}
          </Float>
        </Combobox>
      </div>
      <div className="flex flex-col gap-2.5 mt-4 items-start">
        {tokens.map((token, index) => (
          <div
            className="bg-black rounded-full px-5 py-2.5 flex gap-2 items-center"
            key={index}
          >
            <p className="">{token}</p>
            <button
              aria-label="remove token"
              onClick={() => setTokens(tokens.filter((t) => t !== token))}
            >
              <IoMdCloseCircleOutline size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenizedInput;
