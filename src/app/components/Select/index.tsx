import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export function CustomSelect() {
    return (
        <Select>
            <SelectTrigger className="w-[180px] border-none">
                <SelectValue placeholder="Português (Brasil)" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="pt-br" defaultChecked>Português (Brasil)</SelectItem>
            </SelectContent>
        </Select>
    )
}