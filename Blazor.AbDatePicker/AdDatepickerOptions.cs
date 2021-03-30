using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace Blazor.AbDatePicker
{
    public class AdDatepickerOptions
    {
        public Theme Theme { get; set; }
        /// <summary>
        /// Defines the start view mode. Accepts: 'days', 'months', 'years', 0 for days, 1 for months and 2 for years.
        /// </summary>
        public StartView StartView { get; set; } = StartView.Days;
        /// <summary>
        /// Defines abbreviation of date of week values: 'short' (first letter) or 'narrow' (first two letters).
        /// </summary>
        public WeekDayFormat WeekDayFormat { get; set; } = WeekDayFormat.Narrow;
        public DayOfWeek FirstDayOfWeek { get; set; }
        public List<DayOfWeek> DisabledDayOfWeek { get; set; } = new();
        public List<string> InputFormats { get; set; } = new() {"dd-MM-yyyy"};
        public string OutputFormat { get; set; } = "dd-MM-yyyy";
        public DateTime? MinDate { get; set; }
        public DateTime? MaxDate { get; set; }
        /// <summary>
        /// Defines the opening mode (modal or not) of the calendar portion of the datepicker.
        /// </summary>
        public bool Modal { get; set; }
        /// <summary>
        /// Display the datepicker inline inside a given div. value can be the id of a div, a jQuery object of a div or false.
        /// </summary>
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Inline { get; set; }
        /// <summary>
        /// Disable the datepicker. This method has no effect on an inline datepicker.
        /// </summary>
        public bool Disable { get; set; }
        public string Markup { get; } = "bootstrap4";

        public void SetInlineDefault()
        {
            this.Inline = null;
        }
    }

    [JsonConverter(typeof(CustomJsonStringEnumConverter))]
    public enum Theme
    {
        [EnumMember(Value = "default")]
        Default,
        [EnumMember(Value = "bootstrap")]
        Bootstrap,
        [EnumMember(Value = "blue")]
        Blue,
        [EnumMember(Value = "green")]
        Green,
        [EnumMember(Value = "marron")]
        // ReSharper disable once UnusedMember.Global
        Marron
    }

    /// <summary>
    /// Defines the start view mode.
    /// </summary>
    public enum StartView
        : byte
    {
        Days = 0,
        Months = 1,
        Years = 2,
    }

    /// <summary>
    /// Defines abbreviation of date of week values.
    /// </summary>
    [JsonConverter(typeof(CustomJsonStringEnumConverter))]
    public enum WeekDayFormat
    {
        /// <summary>
        /// First letter.
        /// </summary>
        [EnumMember(Value = "short")]
        Short,
        /// <summary>
        /// First two letters.
        /// </summary>
        [EnumMember(Value = "narrow")]
        Narrow,
    }

    public enum DayOfWeek
        : byte
    {
        Sunday = 0,
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6,
    }
}