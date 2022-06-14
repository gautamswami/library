import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();

export default function UnitDrop() {
  const [value, setValue] = React.useState(null);

  return (
    <Autocomplete 
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'int') {
          setValue({
            unit: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            unit: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
        // console.log("value")
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.unit);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            unit: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={units}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "int") {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.unit;
      }}
      renderOption={(props, option) => <li {...props}>{option.unit}</li>}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="SELECT UNIT" />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const units = [
 {unit : 1},
 {unit : 2},
];
